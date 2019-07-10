package com.example.tres_coronas

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        btn_invitado.setOnClickListener {
            irAInvitado() }
    }

    fun irAInvitado(){
        val intentExplicito = Intent(
            this,
            TiposRopa::class.java
        )
        startActivity(intentExplicito)
    }
}
