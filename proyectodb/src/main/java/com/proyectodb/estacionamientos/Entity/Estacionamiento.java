package com.proyectodb.estacionamientos.Entity;
import javax.persistence.*;
import java.util.Date;



    @Entity // objeto se convierte en una base de datos
    @Table(name = "estacionamientos") //Nombre de nuestra base de datos
    public class Estacionamiento {

        @Id // Valor único para identificar objeto.
        @GeneratedValue(strategy = GenerationType.IDENTITY) // Campo se genera automaticamente
        private long id;
        private String nombre;
        private String marca;
        private String modelo;
        private String placa;

        public int getHora() {
            return hora;
        }

        public void setHora(int hora) {
            this.hora = hora;
        }

        private int precio;
        private int hora;


        private Double average;
        @Column(name = "create_at") // Cambiar nombre de atributo
        @Temporal(TemporalType.TIME) // Atributo sea tratado como una fecha sin error
        private Date createAt;


        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getMarca() {
            return marca;
        }

        public void setMarca(String marca) {
            this.marca = marca;
        }

        public String getModelo() {
            return modelo;
        }

        public void setModelo(String modelo) {
            this.modelo = modelo;
        }

        public String getPlaca() {
            return placa;
        }

        public void setPlaca(String placa) {
            this.placa = placa;
        }

        public Double getAverage() {
            return average;
        }

        public void setAverage(Double average) {
            this.average = average;
        }

        public Date getCreateAt() {
            return createAt;
        }

        public void setCreateAt(Date createAt) {
            this.createAt = createAt;
        }

        public int getPrecio() {
            return precio;
        }

        public void setPrecio(int precio) {
            this.precio = precio;
        }
    }

