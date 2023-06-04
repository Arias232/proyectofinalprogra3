package com.proyectodb.estacionamientos.services;


import com.proyectodb.estacionamientos.Entity.Estacionamiento;

import java.util.List;

public interface EstacionamientoService {
    public List<Estacionamiento> findAll();
    public Estacionamiento findById(Long id);
    public void createEstacionamiento(Estacionamiento estacionamiento);
    public void modifyEstacionamiento(Long id, Estacionamiento estacionamiento);
    public void deleteEstacionamiento(Long id);
}
