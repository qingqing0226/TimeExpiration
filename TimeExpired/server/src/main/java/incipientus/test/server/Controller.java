package incipientus.test.server;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.util.Scanner;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@CrossOrigin
@RequestMapping("/api/date")
public class Controller {
    @PostMapping
    ResponseEntity saveDate(@RequestBody String date) {
        try {
            FileWriter fw = new FileWriter("expirationDate.txt");
            fw.write(date);
            fw.close();
            return ResponseEntity.created(URI.create("/api/date/expirationDate.txt")).body(date);
        } catch (IOException e) {
            throw new ResponseStatusException(NOT_FOUND, e.getMessage());
        }

    }

    @GetMapping
    ResponseEntity getDate() {
        try {
            Scanner sc = new Scanner(new File("expirationDate.txt"));
            if(sc.hasNextLine()) {
                String date = sc.nextLine();
                return ResponseEntity.ok(date);
            } else {
                throw new ResponseStatusException(NOT_FOUND, "No date");
            }
        } catch (FileNotFoundException e) {
            throw new ResponseStatusException(NOT_FOUND, e.getMessage());
        }
    }
}
