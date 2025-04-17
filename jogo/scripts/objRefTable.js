const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Flash,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Behaviors.Rotate,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Mouse.Cnds.OnObjectClicked
	];
};
self.C3_JsPropNameTable = [
	{Tilemap: 0},
	{Tilemap2: 0},
	{janela: 0},
	{Solid: 0},
	{suporte: 0},
	{Flash: 0},
	{bau: 0},
	{Platform: 0},
	{caixa: 0},
	{porta: 0},
	{chave: 0},
	{bomba: 0},
	{ScrollTo: 0},
	{jogador: 0},
	{sensorSolido: 0},
	{Keyboard: 0},
	{direcao: 0},
	{patrulheiro: 0},
	{sensorpatrulheiroDireita: 0},
	{sensorpatrulheiroesquerda: 0},
	{Sprite: 0},
	{porcoCanhao: 0},
	{canhao: 0},
	{Bullet: 0},
	{DestroyOutsideLayout: 0},
	{Rotate: 0},
	{bala: 0},
	{sensorCanhao: 0},
	{vidahud: 0},
	{itenshud: 0},
	{artmenu: 0},
	{botaostart: 0},
	{btnstart: 0},
	{planoDeFundo: 0},
	{botaostart_pf: 0},
	{botaostartpf: 0},
	{chefao: 0},
	{Audio: 0},
	{Mouse: 0},
	{Sprite2: 0},
	{jogarNovamente: 0},
	{sim: 0},
	{nao: 0},
	{vidas: 0}
];

self.InstanceType = {
	Tilemap: class extends self.ITilemapInstance {},
	Tilemap2: class extends self.ITilemapInstance {},
	janela: class extends self.ISpriteInstance {},
	suporte: class extends self.ISpriteInstance {},
	bau: class extends self.ISpriteInstance {},
	caixa: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	sensorSolido: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	patrulheiro: class extends self.ISpriteInstance {},
	sensorpatrulheiroDireita: class extends self.ISpriteInstance {},
	sensorpatrulheiroesquerda: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	porcoCanhao: class extends self.ISpriteInstance {},
	canhao: class extends self.ISpriteInstance {},
	bala: class extends self.ISpriteInstance {},
	sensorCanhao: class extends self.ISpriteInstance {},
	vidahud: class extends self.ISpriteInstance {},
	itenshud: class extends self.ISpriteInstance {},
	artmenu: class extends self.ISpriteInstance {},
	botaostart: class extends self.ISpriteInstance {},
	btnstart: class extends self.IButtonInstance {},
	planoDeFundo: class extends self.ISpriteInstance {},
	botaostart_pf: class extends self.ISpriteInstance {},
	botaostartpf: class extends self.ISpriteInstance {},
	chefao: class extends self.ISpriteInstance {},
	chave: class extends self.ISpriteInstance {},
	bomba: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	jogarNovamente: class extends self.ISpriteInstance {},
	sim: class extends self.ISpriteInstance {},
	nao: class extends self.ISpriteInstance {}
}