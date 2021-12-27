let 
    nixpkgs = import (import nix/sources.nix).nixpkgs { };
in
nixpkgs.mkShell {
    name= "cinematask-shell";
    buildInputs = with nixpkgs; [
        nodejs-16_x
        yarn
        niv
        docker
        docker-compose
    ];
}