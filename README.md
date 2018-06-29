# bftx-public
Blockfreight™ (MIT) Global Logistics Network https://blockfreight.com/
## Requirements
 git<br/>
 docker
## Build
git clone https://github.com/blockfreight/bft-website.git<br/>
`docker build -t blockfreight/public:latest .`<br/>
`docker push blockfreight/public`
## Env
Create .env file in the root of you project containing the following parameters:

ENV_DEFUALT_HOST=blockfreight.com  <br/>
ENV_VIRTUAL_HOST=blockfreight.com  <br/>
ENV_LETSENCRYPT_HOST=blockfreight.com <br/>
ENV_LETSENCRYPT_EMAIL=support@blockfreight.com <br/>
ENV_MONGO_USER=muser<br/>
ENV_MONGO_PASSWORD=replace_me_secret_mpass<br/>
ENV_MONGO_OPLOG_URL=mongodb://muser:replace_me_secret_mpass@mongo:27018/meteor<br/>
ENV_MONGO_OPLOG_URL=<br/>
ENV_MAIL_URL=smtp.gmail.com<br/>
ENV_ROOT_URL=http://blockfreight.com<br/>
ENV_STRIPE=rk_OoGAc0TjE<br/>
ENV_PGP_SECRET
ENV_ETHEREUM_SECRET
## Deployment
`docker-compose up`
