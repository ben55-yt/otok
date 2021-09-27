const Discord = require('discord.js')                                                            
const client = new Discord.Client()                                                            
const venom = "TOKENİNİZ"  // tokeninizi giriniz :)                    

client.login(venom)                                                                             

client.on('ready',async () => {                                                                  

    var rexevil = client.channels.find(channel => channel.id === 'KANAL ID') //kanal id giriniz :)
    console.log("bot hazır")
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    
      while(1)
    {
    
    const a = Math.floor((Math.random() * (20000-16000) + 16000))
    console.log(a +"ms")
    
    rexevil.send("wh")
    rexevil.send("wb")
    rexevil.send(a/1000 +"saniye boyunca bekletiliyorum.")
    await sleep(a) 

}

})

/*

Selam Dostum :)
------------------------------------------------------------------------
Öncelikle Bu İçerik RexEviL Tarafından Üretilmiştir !
------------------------------------------------------------------------
! ! ! Çalınması Durumunda Gerekli Tüm İşlemler Yapılır Bilginize ! ! !
------------------------------------------------------------------------
Önceden Yazdığımız Oto Mesaj Altyapısında Bir Hata Oluştuğu İçin Yeniden Kodlama Kararı Aldık ve Bu Altyapıyı Namı Değer "spanqe" Abimiz Kodladı!
------------------------------------------------------------------------
VenoM Youtube ( rexevil ) : https://www.youtube.com/channel/UCDi0kvLfOaBI-BbZNyBz6NA

VenoM Youtube Discord : https://www.youtube.com/channel/UCDi0kvLfOaBI-BbZNyBz6NA

spanqe Youtube : https://www.youtube.com/channel/UCXkVZcSNa49P0RLMlwYz65A
------------------------------------------------------------------------
*/