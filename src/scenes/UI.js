import Phaser from "phaser";

export default class MainUI extends Phaser.Scene
{
    constructor()
    {
        super('main-ui')
    }

    create()
    {
        // this.newGameText = this.add.text(350, 250, ['New Game'], 
        //     { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        //     fontSize:'48px' });

        const topBox = this.add.rectangle(260,40,500,80,0x6666ff);

        const sideBox = this.add.rectangle(40,310,80,600,0x9966ff);
    }

}