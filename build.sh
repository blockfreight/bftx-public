 #!/bin/bash

 apt-get update
 apt-get install -y bsdtar && ln -sf $(which bsdtar) $(which tar)
 curl "https://install.meteor.com/?release=1.6.0.1" \
    | sed 's/VERBOSITY="--silent"/VERBOSITY="--progress-bar"/' \
    | sh \
 && cd ~/ \
 && git clone https://github.com/blockfreight/bftx-public.git \
 && cd bftx-public \
 && meteor npm i
