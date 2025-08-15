const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'babapiro312343.aternos.me', // Sunucu adresin
    port: 25889, // Sunucu portun
    username: 'BotLobby', // Bot ismi
    version: false // Otomatik sürüm algılama
  });

  bot.on('spawn', () => {
    console.log('✅ Bot sunucuya bağlandı!');
  });

  bot.on('error', (err) => {
    console.log('❌ Hata:', err);
  });

  bot.on('end', () => {
    console.log('🔄 Bot düştü, yeniden bağlanıyor...');
    setTimeout(createBot, 5000);
  });
}

createBot();
