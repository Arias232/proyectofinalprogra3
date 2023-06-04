package com.proyectodb.estacionamientos.controller;

import com.proyectodb.estacionamientos.Entity.Estacionamiento;
import com.proyectodb.estacionamientos.services.EstacionamientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/estacionamientos")
public class EstacionamientoController {
    @Autowired
    EstacionamientoService estacionamientoService;

    // Para consultas se utilizan los métodos GET
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<Estacionamiento> listarEstacionamientos() {
        return estacionamientoService.findAll();
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/{id}")
    public Estacionamiento obtenerEstacionamiento(@PathVariable Long id) {
        return estacionamientoService.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
@PostMapping()
    public void crearEstacionamiento(@RequestBody Estacionamiento estacionamiento){
    estacionamientoService.createEstacionamiento(estacionamiento);
}

    @CrossOrigin(origins = "http://localhost:4200")
@PutMapping(value = "/{id}")
    public void modificarEstacionamiento(@PathVariable Long id, @RequestBody Estacionamiento estacionamiento){
    estacionamientoService.modifyEstacionamiento(id, estacionamiento);
}

    @CrossOrigin(origins = "http://localhost:4200")
@DeleteMapping(value = "/{id}")
    public void modificarEstacionamiento(@PathVariable Long id){
    estacionamientoService.deleteEstacionamiento(id);
}
}



