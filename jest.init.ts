// Binds React to the global scope for testing convenience
import React from 'react'
global.React = React

// Extends Jest expectations with additional dom-themed assertions
import '@testing-library/jest-dom'
