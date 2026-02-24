FROM codercom/code-server:latest
USER root
RUN apt-get update 
RUN apt-get install -y python3-pip
RUN apt-get install curl
RUN apt-get install unzip
ENV HOME="/home/coder"
ENV DENO_INSTALL="$HOME/.deno"
RUN echo "export PATH=\"$DENO_INSTALL/bin:\$PATH\"" >> $HOME/.bashrc
RUN curl -fsSL https://deno.land/install.sh | sh
USER coder
