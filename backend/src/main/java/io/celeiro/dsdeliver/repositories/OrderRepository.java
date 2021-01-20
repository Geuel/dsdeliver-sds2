package io.celeiro.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.celeiro.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
