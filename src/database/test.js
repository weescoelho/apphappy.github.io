const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage')

Database.then( async (db) => {
     await saveOrphanage(db, {
      lat: "-27.2224511",
      lng: "-49.6589238",
      name:  "Lar dos Meninos",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp:"9999-9999",
      images:[
        "https://images.unsplash.com/photo-1602389569471-5df5bde61968?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  
        "https://images.unsplash.com/photo-1570570423586-370eee6c19b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
      ].toString(),
      instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      opening_hours: "Horário de visitas Das 18h até 8h",
      open_on_weekends: "0"
    })
   // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

  // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
    console.log(orphanage)

  // // deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})