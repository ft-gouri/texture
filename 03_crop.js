const r = require('raylib');

function drawTexture() {
    const target = r.LoadRenderTexture(200, 200);

    r.BeginTextureMode(target);
    r.ClearBackground(r.BLACK);

    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircle(80, 80, 15, r.WHITE);

    r.EndTextureMode();
    return target;
}

function setup() {
    const world = {
        WIDTH: 600,
        HEIGHT: 300,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.WIDTH, world.HEIGHT, 'crop');
    r.SetTargetFPS(50);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    world.target = drawTexture();
    return world;
}

function draw(target) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);
    const source = {
        x: 50,
        y: 50,
        width: 100,
        height: 100,
    };

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    r.DrawTextureRec(target.texture, source, { x: 400, y: 100 }, r.WHITE);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world.target);
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
