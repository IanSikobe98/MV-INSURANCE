package com.example.mvinsurance.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.RequestMethod;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.
        
        authorizeRequests()
//                .antMatchers("/admin").hasRole("ADMIN")
                .antMatchers("/valuator form").hasAnyRole("ADMIN", "USER")
//                .antMatchers("/valuator form").hasAnyRole("ADMIN", "USER")
                .antMatchers("/valuation form").hasAnyRole("ADMIN", "USER")
                .antMatchers("/").hasAnyRole("ADMIN", "USER")
                .antMatchers("/reports").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET, "/csv").hasAnyRole("ADMIN","USER")
                .antMatchers(HttpMethod.GET, "/csv2").hasAnyRole("ADMIN","USER")
                .antMatchers(HttpMethod.GET, "/csv3").hasAnyRole("ADMIN","USER")

                .antMatchers("/error").hasAnyRole("ADMIN", "USER")
                .antMatchers("/policies").hasAnyRole("ADMIN", "USER")
                .antMatchers("/valuation form").hasAnyRole("ADMIN", "USER")
                .antMatchers("/experience").hasAnyRole("ADMIN", "USER")
                .antMatchers("/type").hasAnyRole("ADMIN", "USER")
                .antMatchers("/valuators").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET,"/valuator form").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/valuator form").hasAnyRole("ADMIN","USER")
                .antMatchers("/polpen").hasAnyRole("ADMIN", "USER")
//                .antMatchers("/experience").permitAll()
                .and().formLogin().loginPage("/login")
                .and()
//                .logout().logoutRequestMatcher(new AntPathRequestMatcher(pattern: "/logout")).logoutSuccessUrl("/login")
                
//        .logout().logoutRequestMatcher(new AntPathRequestMatcher).logou
                .logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login")
          
                ;
      http.csrf().disable();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
