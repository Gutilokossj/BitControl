package com.bitcontrol.api.controllers;


import com.bitcontrol.api.usuario.DadosCadastroUsuário;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:5500", "https://gutilokossj.github.io/BitControl"})
public class LoginController {

    @PostMapping
    public ResponseEntity<Void> cadastrarUsuario(@RequestBody DadosCadastroUsuário dados){
        System.out.println(dados.nomeCompleto());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
