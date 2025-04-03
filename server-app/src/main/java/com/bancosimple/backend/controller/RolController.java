package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.RolDTO;
import com.bancosimple.backend.mapper.RolMapper;
import com.bancosimple.backend.model.Rol;
import com.bancosimple.backend.service.RolService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RolController {

    private final RolService service;

    public RolController(RolService service) {
        this.service = service;
    }

    @GetMapping
    public List<RolDTO> getAll() {
        return service.findAll().stream().map(RolMapper::toDTO).toList();
    }

    @PostMapping
    public RolDTO create(@RequestBody RolDTO dto) {
        Rol saved = service.save(RolMapper.toEntity(dto));
        return RolMapper.toDTO(saved);
    }
}
