package com.bitcontrol.api.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Disable CSRF for API requests
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))  // Enable CORS with custom config
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()  // Allow all requests
                );
        return http.build();
    }

    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(List.of(
                "http://localhost:3000",   // Local development
                "http://127.0.0.1:5500",   // Local live server
                "https://gutilokossj.github.io"  // GitHub Pages hosting
        ));
        corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));  // Allowed methods
        corsConfiguration.setAllowedHeaders(List.of("*"));  // Allow all headers
        corsConfiguration.setAllowCredentials(true);  // Allow credentials if needed

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);  // Apply CORS globally
        return source;
    }
}