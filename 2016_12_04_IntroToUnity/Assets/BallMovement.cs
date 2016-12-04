using UnityEngine;
using System.Collections;

public class BallMovement : MonoBehaviour {

	public float speed;
	Vector3 direction;

	// Use this for initialization
	void Start () {
		//the direction in which our ball will start, with a random horizontal component and a random vertical component
		direction = new Vector3 (Random.Range (-1f, 1f), Random.Range(-0.5f, 0.5f), 0);
	}
	
	// Update is called once per frame
	void Update () {

		//every frame, we move the ball in the specified direction, at the specified speed
		transform.Translate (direction * speed);


		//if we get out of bounds
		if(transform.position.x > 9 || transform.position.x < -9){

			//we set the ball back at the center
			transform.position = new Vector3 (0, 0, 0);

			//and we give it a new direction
			direction = new Vector3 (Random.Range (-1f, 1f), Random.Range(-0.5f, 0.5f), 0);
		}

	}

	void OnCollisionEnter(Collision col){

		//if we collide with an object which has the tag "Wall"
		if(col.gameObject.tag == "Wall"){

			//we bounce in the opposite way
			direction.y *= -1;
		}

		//if we collide with an object which has the tag "Paddle"
		if(col.gameObject.tag == "Paddle"){

			//we reverse on the X axis
			direction.x *= -1;

			//and we have an opposite chance of bouncing on the Y axis
			if(Random.value < 0.5f)
				direction.y *= -1;
		}
	}
}
