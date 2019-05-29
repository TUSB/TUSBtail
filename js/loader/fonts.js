// graphics

var fonts_loader = new PIXI.loaders.Loader();

fonts_loader
	.add("undertale", "fonts/undertale.fnt")
	.add("numbers", "fonts/numbers.fnt")
	.add("speechbubble", "fonts/speechbubble.fnt")
	.add("tusb", "fonts/tusb.fnt")
	.on("complete", function(loader, resources) {
		console.log(resources);
		process_fonts(resources);
	})
;

function process_fonts(resources) {

	resources["undertale_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	resources["numbers_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	resources["speechbubble_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	resources["tusb_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

	markAssetLoaded("fonts");

}
