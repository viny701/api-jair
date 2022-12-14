###############################################
# Grupo Japungu ###############################
# Dockerfile para aplicação api-abastecimento #
# CloudFaster - 2022 ##########################
###############################################

# Selecionando imagem do container
FROM node:latest

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
    
# Selecionando diretorio de trabalho no container
WORKDIR /app

# Copiando arquivos de configuração e aplicação
ADD . /app

# Instalando dependencias do node
RUN npm install

CMD ["google-chrome-stable"]
# Atribuindo porta server.js
EXPOSE 3005

# Iniciando aplicação
ENTRYPOINT npm start