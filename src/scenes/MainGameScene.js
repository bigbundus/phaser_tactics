import Phaser from 'phaser'

export default class MainGameScene extends Phaser.Scene
{
	constructor()
	{
		super('main-game')
	}

	preload()
    {
        this.load.image('ground-tiles', 'tiles/TX Tileset Grass.png')

        this.load.tilemapTiledJSON('level-1', 'sample_map.json')
    }

    create()
    {
        const map = this.make.tilemap({ key: 'level-1'})
        const groundTileset = map.addTilesetImage('TX Tileset Grass', 'ground-tiles')
        map.createLayer('Ground', groundTileset)

        const cursors = this.input.keyboard.createCursorKeys()

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl({
			camera: this.cameras.main,

			left: cursors.left,
			right: cursors.right,
			up: cursors.up,
			down: cursors.down,

			zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
			zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),

			acceleration: 0.06,
			drag: 0.002,
			maxSpeed: 0.8,

            maxZoom: 3,
            minZoom: 0.5,

		})

        const keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        const keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        const keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        const keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.WASDcontrols = new Phaser.Cameras.Controls.SmoothedKeyControl({
			camera: this.cameras.main,

			left: keyA,
			right: keyD,
			up: keyW,
			down: keyS,

			acceleration: 0.06,
			drag: 0.002,
			maxSpeed: 0.8,

		})
	
		const cam = this.cameras.main

        this.input.on("pointermove", (p) => {
            if (!p.isDown) return;
        
            cam.scrollX -= (p.x - p.prevPosition.x) / cam.zoom;
            cam.scrollY -= (p.y - p.prevPosition.y) / cam.zoom;
          });

        this.input.on("wheel",  (pointer, gameObjects, deltaX, deltaY, deltaZ) => {
            if (deltaY > 0) {
                var newZoom = cam.zoom -.05;
                if (newZoom > 0.5) {
                    cam.zoom = newZoom;     
                }
            }
          
            if (deltaY < 0) {
                var newZoom = cam.zoom + .05;
                if (newZoom < 3) {
                    cam.zoom = newZoom;     
                }
            }
    
            // this.camera.centerOn(pointer.worldX, pointer.worldY);
            // this.camera.pan(pointer.worldX, pointer.worldY, 2000, "Power2");
          
          });
        
    }

    update(time, deltaTime)
	{
		this.controls.update(deltaTime)
        this.WASDcontrols.update(deltaTime)
	}
}
