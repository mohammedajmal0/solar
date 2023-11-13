package com.example.solar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
@Controller
public class SolarApplication {



	public static void main(String[] args) {
		SpringApplication.run(SolarApplication.class, args);
	}
	private final MyRepository repository;
	@Autowired
	public SolarApplication(MyRepository repository) {
		this.repository = repository;
	}
	public List<MyEntity> getAllEntities(){
        return repository.findAll();
	}
	@GetMapping("/")
	public String home(){
		return "index";
	}
	@GetMapping("/estimator.html")
	public String estimator(){
		return "estimator";
	}
	@GetMapping("/about.html")
	public String about(){
		return "about";
	}
	@GetMapping("/blog.html")
	public String blog(){
		return "blog";
	}
	@GetMapping("/contact.html")
	public String contact(){
		return "contact";
	}
    @GetMapping("blog-details{index}")
	public String blogDetail(@PathVariable int index,Model model){
		model.addAttribute("blogIndex",index);
		return "blog-details";
	}
	@PostMapping("/getTariff")
	@ResponseBody
	public ResponseEntity<Float> getTariff(@RequestBody String data) {
        System.out.println(data);
        float temp = 0;
        try {
            temp = repository.findTariffByName(data.trim());
            System.out.println(repository.findById(1L).get().getTariff());
            System.out.println(temp);
        } catch (Exception e) {
            System.out.println("error while getting name");
        }
        return ResponseEntity.ok(temp);
    }
//	@PostMapping("/estimate")
//	public String estimatePage(@RequestParam("pincodeInfo") String pincodeInfo,
//							   @RequestParam("Average-monthly-bill") int averageMonthlyBill,
//							   @RequestParam("roof-area") int roofArea,
//							   @RequestParam("selectedType") String selectedValue,
//							   @RequestParam("selectedProvider") String selectedProvider,
//							   Model model){
//		model.addAttribute("info",pincodeInfo);
//		model.addAttribute("Avg",averageMonthlyBill);
//		model.addAttribute("roofArea",roofArea);
//		model.addAttribute("selectedValue",selectedValue);
//		model.addAttribute("selectedProvider",selectedProvider);
//		try {
//			float temp = repository.findTariffByName(selectedProvider.trim());
//			model.addAttribute("tariff",temp);
//			System.out.println(repository.findById(1L).get().getTariff());
//			System.out.println(temp);
//		}
//		catch (Exception e){
//			System.out.println("error while getting name");
//		}
//		int tariff=8; // update based on provider
//		int unitConsumption=averageMonthlyBill/tariff;
//		int plantSize_unitConsumption=unitConsumption/120;
//		int plantSize_area=roofArea/100;
//		int plantCapacity = Math.min(plantSize_unitConsumption, plantSize_area);
//		// solar units per month
//		int unitsGeneratedPerDay=plantCapacity*4;
//		int unitsGeneratedPerMonth=unitsGeneratedPerDay*30;
//		int totalRevenueGeneratedPerMonth=unitsGeneratedPerMonth*9;
//		int totalRevenueGeneratedPerYear=totalRevenueGeneratedPerMonth*12;
//		// calculating total price
//		int totalPrice=0;
//		int saving=0;
//		int pricePerKw=0;
//		if(plantSize_unitConsumption>=3 && plantSize_unitConsumption<=5){
//			pricePerKw=75000;
//		} else if (plantSize_unitConsumption>=5 && plantSize_unitConsumption<=10) {
//			pricePerKw=65000;
//		}
//		else if (plantSize_unitConsumption>=10 && plantSize_unitConsumption<=50) {
//			pricePerKw=60000;
//		}
//		else if (plantSize_unitConsumption>=50 && plantSize_unitConsumption<=100) {
//			pricePerKw=55000;
//		}
//		if(plantCapacity<=5){
//			totalPrice=pricePerKw*plantCapacity;
//		}
//		else{
//			saving=averageMonthlyBill-totalRevenueGeneratedPerMonth;
//		}
//
//        return "index";
//	}
}
