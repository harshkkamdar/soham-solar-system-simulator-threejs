export interface Vector2D {
  x: number;
  y: number;
}

export interface GravitationalBody {
  position: Vector2D;
  velocity: Vector2D;
  mass: number;
  radius: number;
} 