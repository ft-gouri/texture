const r = require('raylib');

function drawTexture() {
    const target = r.LoadRenderTexture(200, 200);

    r.BeginTextureMode(target);
    r.ClearBackground(r.BLACK);

    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircle(80, 120, 15, r.WHITE);

    r.EndTextureMode();
    return target;
}

function setup() {
    const world = {
        WIDTH: 800,
        HEIGHT: 300,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);
    r.InitWindow(world.WIDTH, world.HEIGHT, 'flip');
    r.SetTargetFPS(50);

    world.target = drawTexture();
    return world;
}

function draw(target) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);
    const source1 = {
        x: 0,
        y: 0,
        width: -200,
        height: 200,
    };
    const source2 = {
        x: 0,
        y: 200,
        width: 200,
        height: -200,
    };

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    r.DrawTextureRec(target.texture, source1, { x: 300, y: 50 }, r.WHITE);
    r.DrawTextureRec(target.texture, source2, { x: 550, y: 50 }, r.WHITE);

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
