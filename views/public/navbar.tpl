// navbar.tpl

{{define "navbar"}}

<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
        <a class="navbar-brand" href="#"><img src="assets/images/blockfreight_logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon  icon_menu"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a data-scroll="" class="nav-link section-scroll" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a data-scroll="" class="nav-link section-scroll" href="#about-p">About</a>
                </li>
                <li class="nav-item">
                    <a data-scroll="" class="nav-link section-scroll" href="#features">Features</a>
                </li>
                <li class="nav-item">
                    <a data-scroll="" class="nav-link section-scroll" href="#pricing">Pricing</a>
                </li>
                <li>
                    <a data-scroll="" href="#testimonials" class="nav-link section-scroll">Testimonials</a>
                </li>
                <li>
                    <a data-scroll="" href="#blog" class="nav-link section-scroll">Blog</a>
                </li>
                <li>
                    <div class="connect-block">
                        <!--<a href="/signup">Sign Up</a>-->
                        <a href="/user/register">Sign Up</a>
                        <a href="" class="btn btn-white">Start Free Trial</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>

{{end}}