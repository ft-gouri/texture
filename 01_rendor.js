const r = require('raylib');

function setup() {
    const WIDTH = 800;
    const HEIGHT = 600;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'rendor');
    r.SetTargetFPS(50);

    const target = r.LoadRenderTexture(200, 200);
    createTexture(target);

    return {
        WIDTH,
        HEIGHT,
        target,
    };
}

function createTexture(target) {
    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK);
    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircle(80, 80, 15, r.WHITE);

    r.EndTextureMode();
}

function draw(w) {
    const target = w.target;
    r.BeginDrawing();

    r.ClearBackground(r.DARKGRAY);

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    r.DrawTexture(target.texture, 300, 50, r.WHITE);
    r.DrawTexture(target.texture, 550, 50, r.WHITE);
    r.DrawTexture(target.texture, 50, 300, r.WHITE);
    r.DrawTexture(target.texture, 300, 300, r.WHITE);
    r.DrawTexture(target.texture, 550, 300, r.WHITE);

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
