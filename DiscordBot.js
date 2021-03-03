const { Client, MessageEmbed } = require("discord.js");

class DiscordBot {
  constructor(token) {
    console.log("BOTSTART");

    this.win = win;

    this.client = new Client();
    this.client.on("ready", this.onReady.bind(this));
    this.client.on("message", this.onMessage.bind(this));

    this.client.login(token);
  }

  onReady() {
    console.log("BOTREADY");
  }

  onMessage(message) {
    console.log(message.content);

    this.win.webContents.send("messageDiscord", message.content);

    const receveidEmbed = message.embeds[0];

    if (message.content.includes("🍎")) {
      const answer = new MessageEmbed();
      answer.setTitle("Stranger");
      answer.setColor("black");
      answer.setDescription("Hmm.. très bon choix");
      message.channel.send(answer);
      console.log("1");
      //   console.log(message.content);
    }

    if (
      receveidEmbed &&
      receveidEmbed.description.includes("Hmm.. très bon choix")
    ) {
      const answer2 = new MessageEmbed();
      answer2.setTitle("Stranger");
      answer2.setColor("black");
      answer2.setDescription(
        "La pomme est l'un des fruits les plus consommés au monde, il contient beaucoup de vitamine"
      );

      setTimeout(() => {
        message.channel.send(answer2);
        console.log("2");
      }, 500);
    }

    if (
      receveidEmbed &&
      receveidEmbed.description.includes(
        "La pomme est l'un des fruits les plus consommés au monde, il contient beaucoup de vitamine"
      )
    ) {
      const answer3 = new MessageEmbed();
      answer3.setTitle("Stranger");
      answer3.setColor("black");
      answer3.setDescription(
        "Mon rôle aujourd'hui est te proposer une recette utilisant donc des pommes"
      );

      setTimeout(() => {
        message.channel.send(answer3);
        console.log("2");
      }, 1800);

      //   console.log(message.content);
    }

    if (
      receveidEmbed &&
      receveidEmbed.description.includes(
        "Mon rôle aujourd'hui est te proposer une recette utilisant donc des pommes"
      )
    ) {
      const answer4 = new MessageEmbed();
      answer4.setTitle("Stranger");
      answer4.setColor("black");
      answer4.setDescription("Est-tu plus d'humeur.... ");

      setTimeout(() => {
        message.channel.send(answer4);
        console.log("2");
      }, 1800);
    }

    if (
      receveidEmbed &&
      receveidEmbed.description.includes("Est-tu plus d'humeur....")
    ) {
      const answer5 = new MessageEmbed();
      answer5.setTitle("Stranger");
      answer5.setColor("black");
      answer5.setDescription("Convivialité ?");

      setTimeout(() => {
        message.channel.send(answer5);
        console.log("2");
      }, 600);
    }

    if (receveidEmbed && receveidEmbed.description.includes("Convivialité ?")) {
      const answer6 = new MessageEmbed();
      answer6.setTitle("Stranger");
      answer6.setColor("black");
      answer6.setDescription("Fête ?");

      setTimeout(() => {
        message.channel.send(answer6);
        console.log("2");
      }, 600);
    }

    if (receveidEmbed && receveidEmbed.description.includes("Fête ?")) {
      const answer7 = new MessageEmbed();
      answer7.setTitle("Stranger");
      answer7.setColor("black");
      answer7.setDescription("Matinale ?");

      setTimeout(() => {
        message.channel.send(answer7);
        console.log("2");
      }, 600);
    }

    if (message.content.includes("Fête")) {
      const answer8 = new MessageEmbed();
      answer8.setTitle("Stranger");
      answer8.setColor("black");
      answer8.setDescription("Hmm... Voyons ce que je peux faire");
      setTimeout(() => {
        message.channel.send(answer8);
        console.log("2");
      }, 600);

      //   console.log(message.content);
    }

    if (
      receveidEmbed &&
      receveidEmbed.description.includes("Hmm... Voyons ce que je peux faire")
    ) {
      const answer9 = new MessageEmbed();
      answer9.setTitle("Stranger");
      answer9.setColor("black");
      answer9.setDescription(
        "Que dirais tu de déguster l'un des mes cocktails fétiches"
      );

      setTimeout(() => {
        message.channel.send(answer9);
        console.log("2");
      }, 1300);
    }

    if (
      receveidEmbed &&
      receveidEmbed.description.includes(
        "Que dirais tu de déguster l'un des mes cocktails fétiches"
      )
    ) {
      const answer10 = new MessageEmbed();
      answer10.setTitle("Stranger");
      answer10.setColor("black");
      answer10.setDescription("Notes bien:");

      setTimeout(() => {
        message.channel.send(answer10);
        console.log("2");
      }, 1300);
    }
    if (receveidEmbed && receveidEmbed.description.includes("Notes bien:")) {
      const answer11 = new MessageEmbed();
      answer11.setTitle("Stranger");
      answer11.setColor("black");
      answer11.setDescription(
        "LE BOURBON A LA POMME : 1/2 citron sucre d’érable au goût Pour le cocktail: 60 ml (1/4 de tasse) de bourbon 120 ml (environ 1/2 tasse) de jus de pomme sans sucre ajouté glaçons au goût 1 tranche de gingembre frais 1 cannette d’eau minérale de 355 ml Pour décorerfacultatif: 1 pomme 2 cerises de terre"
      );

      setTimeout(() => {
        message.channel.send(answer11);
        console.log("2");
      }, 1300);
    }

    if (
      receveidEmbed &&
      receveidEmbed.description.includes(
        "LE BOURBON A LA POMME : 1/2 citron sucre d’érable au goût Pour le cocktail: 60 ml (1/4 de tasse) de bourbon 120 ml (environ 1/2 tasse) de jus de pomme sans sucre ajouté glaçons au goût 1 tranche de gingembre frais 1 cannette d’eau minérale de 355 ml Pour décorerfacultatif: 1 pomme 2 cerises de terre"
      )
    ) {
      const answer12 = new MessageEmbed();
      answer12.setTitle("Stranger");
      answer12.setColor("black");
      answer12.setDescription("A consommer avec modération!");

      setTimeout(() => {
        message.channel.send(answer12);
        console.log("2");
      }, 1300);
    }
    if (
      receveidEmbed &&
      receveidEmbed.description.includes("A consommer avec modération!")
    ) {
      const answer13 = new MessageEmbed();
      answer13.setTitle("Stranger");
      answer13.setColor("black");
      answer13.setDescription(
        "Si jamais tu en bois trop, sache que le smoothie de pomme est excellent anti-guele de bois! Vive la 🍎"
      );

      setTimeout(() => {
        message.channel.send(answer13);
        console.log("2");
      }, 1300);
    }

    if (message.content.includes("Convivialité")) {
      const answer14 = new MessageEmbed();
      answer14.setTitle("Stranger");
      answer14.setColor("black");
      answer14.setDescription(
        "Hmm..... rien de tel qu'une bonne tarte aux pommes pour réunir les gens!"
      );
      setTimeout(() => {
        message.channel.send(answer14);
        console.log("2");
      }, 600);

      //   console.log(message.content);
    }

    if (
      receveidEmbed &&
      receveidEmbed.description.includes(
        "Hmm..... rien de tel qu'une bonne tarte aux pommes pour réunir les gens!"
      )
    ) {
      const answer15 = new MessageEmbed();
      answer15.setTitle("Stranger");
      answer15.setColor("black");
      answer15.setDescription(
        "Voici la liste des ingrédients : 225 g	de farine ½ cc	de sel 75 g	de beurre froid, en morceaux 250 g	de séré demi-gras (ou une pâte à gâteau au beurre prête à l’emploi), 4 cs	de noisettes ou d'amandes moulues 4 - 5	pommes coupées en lamelles"
      );

      setTimeout(() => {
        message.channel.send(answer15);
        console.log("2");
      }, 1300);
    }

    if (message.content.includes("Matinal")) {
      const answer14 = new MessageEmbed();
      answer14.setTitle("Stranger");
      answer14.setColor("black");
      answer14.setDescription("Hmm..... bien évidemmentle chausson au pomme");
      setTimeout(() => {
        message.channel.send(answer14);
        console.log("2");
      }, 600);

      //   console.log(message.content);
    }
    if (
      receveidEmbed &&
      receveidEmbed.description.includes(
        "Hmm..... bien évidemment le chausson au pomme"
      )
    ) {
      const answer15 = new MessageEmbed();
      answer15.setTitle("Stranger");
      answer15.setColor("black");
      answer15.setDescription(
        "Il te faudrat : Pâte feuilletée Pomme Pommes ou compote de pommes 3 Sucre Sucre (ajustée à votre goût) 1 c à s Cannelle Cannelle 1/2 c à c"
      );

      setTimeout(() => {
        message.channel.send(answer15);
        console.log("2");
      }, 1300);
    }

    // console.log(message.embeds[0]);
  }
}

module.exports = { DiscordBot };
