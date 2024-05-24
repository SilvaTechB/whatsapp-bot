FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/SilvaTechB/whatsapp-bot.git /root/silva/
WORKDIR /root/silva/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]