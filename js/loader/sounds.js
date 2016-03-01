var sounds_loaded = {
	11: false,
	12: false,
}
// sounds that need to load before starting the game

function reg_sound(n) {
	return function() {
		sounds_loaded[n] = true;
		for (var i in sounds_loaded) {
			if (sounds_loaded[i] == false) return;
		}
		markAssetLoaded("sounds");
	}
}

// define sound names here. Maybe make a manifest for them later.

var se_arrow_ding = new Howl({
	onload: reg_sound(11),
	src: "audio/se/000029aa.wav",
	loop: false,
	volume: 0.7,
});

var se_damage = new Howl({
	onload: reg_sound(12),
	src: "audio/se/000029c3.wav",
	loop: false,
	volume: 0.7,
});