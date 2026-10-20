const r = require('raylib');

function setup() {
    const WIDTH = 700;
    const HEIGHT = 500;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'Sine waves');
    r.SetTargetFPS(50);

    return {
        WIDTH,
        HEIGHT,
    };
}

function createTexture(world) {
    const target = r.LoadRenderTexture(700, 450);
    r.BeginTextureMode(target);

    for (let x = 0; x < world.WIDTH; x = x + 15) {
        const y = world.HEIGHT / 2 - Math.sin(x * 0.02) * 80;
        r.DrawCircle(x, y, 7, r.WHITE);
    }
    r.EndTextureMode();
    return target;
}

function draw(w) {
    const target = createTexture(w);
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawTexture(target.texture, 150, 10, r.WHITE);

    r.EndDrawing();
}

function loop(w) {
    while (!r.WindowShouldClose()) {
        draw(w);
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
