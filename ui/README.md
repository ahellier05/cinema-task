Welcome to the Cinema Ticket App, to get started clone this repository...

This app is using Nix Package Manager to create a reproducible environment, before you run this application please dowload and install Nix:

 - curl -L https://nixos.org/nix/install | sh

 Next type: sudo apt-get direnv, this will install direnv into your environment to manage environment variables, we will use direnv to run the nix-shell

 Hook direnv into your shell by entering this into your .bashrc

if [ $(command -v direnv) ]; then
        eval "$(direnv hook bash)"
fi


 Commands:
 - npm start (starts the development server)
 - npm run lint
 - npm run prettier
 
