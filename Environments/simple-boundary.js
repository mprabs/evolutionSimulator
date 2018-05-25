class SimpleBoundary {
    constructor() {
        this.ground = Matter.Bodies.rectangle(width / 2, height - 10, width, 20, {
            isStatic: true,
            friction: 0.8,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.roof = Matter.Bodies.rectangle(width / 2, 10, width, 20, {
            isStatic: true,
            friction: 0.8,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.left_wall = Matter.Bodies.rectangle(10, height / 2, 20, height, {
            isStatic: true,
            friction: 0.8,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.right_wall = Matter.Bodies.rectangle(width - 10, height / 2, 20, height, {
            isStatic: true,
            friction: 0.8,
            collisionFilter: {
                category: 0x0001
            }
        });
    }

    add_to_world() {
        Matter.World.add(world, [this.ground, this.roof, this.left_wall, this.right_wall]);
    }

    display() {
        fill(color(118, 240, 155))
        rect(this.ground.position.x, this.ground.position.y, width, 20);
        rect(this.left_wall.position.x, this.left_wall.position.y, 20, height);
        rect(this.right_wall.position.x, this.right_wall.position.y, 20, height);
        rect(this.roof.position.x, this.roof.position.y, width, 20);
    }
}