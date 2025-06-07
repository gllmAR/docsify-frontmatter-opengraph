#!/bin/bash

# Test runner script for the Docsify Frontmatter OpenGraph Plugin
# This script opens the test runners in the default browser

echo "Starting Docsify Frontmatter OpenGraph Plugin Tests..."

# Check if we're in the right directory
if [ ! -f "test-runner.html" ]; then
    echo "Error: test-runner.html not found. Please run this script from the tests directory."
    exit 1
fi

echo "Running integration tests..."

# Try to open integration tests in browser
if command -v xdg-open > /dev/null; then
    # Linux
    xdg-open test-runner.html
elif command -v open > /dev/null; then
    # macOS
    open test-runner.html
elif command -v start > /dev/null; then
    # Windows
    start test-runner.html
else
    echo "Could not automatically open browser for integration tests."
    echo "Please manually open: $(pwd)/test-runner.html"
fi

sleep 2

echo "Running unit tests..."

# Try to open unit tests in browser
if command -v xdg-open > /dev/null; then
    # Linux
    xdg-open unit-tests.html
elif command -v open > /dev/null; then
    # macOS
    open unit-tests.html
elif command -v start > /dev/null; then
    # Windows
    start unit-tests.html
else
    echo "Could not automatically open browser for unit tests."
    echo "Please manually open: $(pwd)/unit-tests.html"
fi

echo ""
echo "Tests should now be running in your browser."
echo "Check both browser tabs for test results:"
echo "1. Integration Tests: $(pwd)/test-runner.html"
echo "2. Unit Tests: $(pwd)/unit-tests.html"
