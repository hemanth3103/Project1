#!/bin/bash
echo "[INFO] Detecting file changes and orchestrating tests..."

# Get changed files from the Git diff
changed_files=$(git diff --name-only HEAD)


# Debugging: Output the changed files
echo "[DEBUG] Changed files: $changed_files"

run_unit=false
run_integration=false
run_ui=false

# Loop through the changed files and set flags
for file in $changed_files; do
  if [[ "$file" == app/* || "$file" == tests/unit/* ]]; then
    run_unit=true
  fi
  if [[ "$file" == db/* || "$file" == tests/integration/* ]]; then
    run_integration=true
  fi
  if [[ "$file" == frontend/* || "$file" == tests/ui/* ]]; then
    run_ui=true
  fi
done

# Debugging: Show flags for which tests will run
echo "[DEBUG] Run unit tests: $run_unit"
echo "[DEBUG] Run integration tests: $run_integration"
echo "[DEBUG] Run UI tests: $run_ui"

# Run the tests if needed
if $run_unit; then
  echo "[INFO] Running unit tests..."
  ./run-tests.sh unit
fi
if $run_integration; then
  echo "[INFO] Running integration tests..."
  ./run-tests.sh integration
fi
if $run_ui; then
  echo "[INFO] Running UI tests..."
  ./run-tests.sh ui
fi
