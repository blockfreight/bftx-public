import React, { Component } from 'react';
import {Meteor} from "meteor/meteor";
import type { EdgeUiAccount, EdgeUiContext } from 'edge-login-ui-web'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Trend from 'react-trend';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
export type AccountProps = {
    account: EdgeUiAccount,
    context: EdgeUiContext,
    onLogout: () => mixed
}
const styles = theme => ({
    card: {
        minWidth: 275,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },

    paper: {
        width: '100%',
    },
    papertable: {
        width: '100%',
    },
    grid: {
        width: '100%',
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
});
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class Dashboard extends Component {
    constructor (props: AccountProps) {
        super(props)
    }
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    UpdateCard = () =>
    {

    }
    render() {

        if(!Meteor.userId())
        {
            this.props.history.push("/");
        }
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className="container">

                <div className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                    >
                        <Tab
                            disableRipple
                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                            label="Overview"
                        />
                        <Tab
                            disableRipple
                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                            label="Payment"
                        />
                    </Tabs>
                    <Card className={classes.card}>
                        <CardContent>
                    {value === 0 && <TabContainer>
                        <Trend data={[0, 10, 5, 22, 3.6, 11, 10, 3.6, 11, 10, 5, 22, 3.6, 11]} />
                    </TabContainer>}
                    {value === 1 && <TabContainer>
                        <TextField label="Name on Card" autoFocus={true}
                                   className={classes.textField}
                                   margin="normal" onChange={this.onChangeEmail}/>
                        <TextField label="Card Number"
                                   className={classes.textField}
                                   margin="normal" onChange={this.onChangeEmail}/>
                        <TextField label="Expiry"
                                   className={classes.textField}
                                   margin="normal" onChange={this.onChangeEmail}/>
                        <TextField label="CVV"
                                   className={classes.textField}
                                   margin="normal" onChange={this.onChangeEmail}/>
                        <TextField label="Zip"
                                   className={classes.textField}
                                   margin="normal" onChange={this.onChangeEmail}/>
                        <br/>
                        <Button variant="outlined" color="primary"  onClick={this.UpdateCard}>
                           Update
                        </Button>
                    </TabContainer>}
                    {value === 2 && <TabContainer>{setTimeout(()=>{this.props.account.openManageWindow({})},0)}</TabContainer>}
                    {value === 3 && <TabContainer>Item Four</TabContainer>}
                    {value === 4 && <TabContainer>Item Five</TabContainer>}
                    {value === 5 && <TabContainer>Item Six</TabContainer>}
                    {value === 6 && <TabContainer>Item Seven</TabContainer>}
                        </CardContent>
                    </Card>
                    <Typography className={classes.typography}></Typography>
                </div>

            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
