package com.proyectodb.estacionamientos.services;

import com.proyectodb.estacionamientos.Dao.EstacionamientoDao;
import com.proyectodb.estacionamientos.Entity.Estacionamiento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EstacionamientoServiceImp implements EstacionamientoService {

    @Autowired
    private EstacionamientoDao estacionamientoDao;
    @Override
    public List<Estacionamiento> findAll() {
        return (List<Estacionamiento>) estacionamientoDao.findAll(); //Invoca al productoDao nos sirve para listar todos los productos
    }
    @Override
    public Estacionamiento findById(Long id) {

        return estacionamientoDao.findById(id).orElse(null); // Tiene el método findbyId si no existe que devuelva lo que esta dentro del parentisis
    }


    @Override
    public void createEstacionamiento(Estacionamiento estacionamiento) {
        estacionamientoDao.save(estacionamiento);

    }

    @Override
    public void modifyEstacionamiento(Long id, Estacionamiento estacionamiento) {

        if (estacionamientoDao.existsById(id)) {
            estacionamiento.setId(id);
            estacionamientoDao.save(estacionamiento);
        }

    }

    @Override
    public void deleteEstacionamiento(Long id) {
        if (estacionamientoDao.existsById(id)) {
            estacionamientoDao.deleteById(id);
        }
    }
}
