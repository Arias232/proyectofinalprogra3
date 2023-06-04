package com.proyectodb.estacionamientos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2

public class ProyectobasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProyectobasApplication.class, args);
}

	@Bean
	public Docket api(){
	return new Docket(DocumentationType.SWAGGER_2)
			.select()
			.apis(RequestHandlerSelectors.basePackage("com.proyectodb.estacionamiento"))
			.build()
			.apiInfo(apiDetails());
	}

	private ApiInfo apiDetails(){
		return new ApiInfoBuilder()
				.title("Api Estuiantes")
				.contact(new Contact("Ezequiel Arias ","no-url","bayron5757@gmail.com"))
				.description("Base de datos Estacionamiento Springboot proyecto final")
				.build();
	}

}
