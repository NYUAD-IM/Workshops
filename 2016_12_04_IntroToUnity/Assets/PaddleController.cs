using UnityEngine;
using System.Collections;

public class PaddleController : MonoBehaviour {

	//these values are defined on the Unity Inspector
	public bool leftPaddle;
	public bool rightPaddle;
	public float speed;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

		//if we are the left paddle
		if(leftPaddle){

			//we go up by pressing Q
			if(Input.GetKey(KeyCode.Q)){
				transform.Translate (Vector3.up * speed);
			}

			//and downd by pressing A
			if(Input.GetKey(KeyCode.A)){
				transform.Translate (Vector3.down * speed);
			}
		}

		//if we are on the right paddle
		if(rightPaddle){

			//we go up by pression O
			if(Input.GetKey(KeyCode.O)){
				transform.Translate (Vector3.up * speed);
			}

			//and down by pression L
			if(Input.GetKey(KeyCode.L)){
				transform.Translate (Vector3.down * speed);
			}
		}
	
	}
}
