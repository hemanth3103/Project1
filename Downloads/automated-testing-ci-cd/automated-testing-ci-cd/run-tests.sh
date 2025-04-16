#!/bin/bash
suite=$1
echo "[INFO] Running $suite tests..."

# Debugging: Show the value of $suite
echo "[DEBUG] Test suite selected: $suite"

if [[ "$suite" == "unit" ]]; then
  echo "[INFO] Running unit tests..."
  pytest tests/unit
elif [[ "$suite" == "integration" ]]; then
  echo "[INFO] Running integration tests..."
  pytest tests/integration
elif [[ "$suite" == "ui" ]]; then
  echo "[INFO] Running UI tests..."
  pytest tests/ui
else
  echo "[ERROR] Unknown test suite: $suite"
  exit 1
fi
