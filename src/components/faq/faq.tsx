import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FAQ() {
  // State to track which questions are currently expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // FAQ data - replace with your actual FAQ data
  const faqData = [
    {
      question: 'What is Unipace?',
      answer: 'Unipace is an online learning and hiring platform that has been operating since 2018 until now.',
    },
    {
      question: 'How do I get started with Unipace?',
      answer: 'To get started with Unipace, simply sign up for an account and explore our courses and job listings!',
    },
    // Add more FAQ items as needed
  ];

  // Function to toggle the expansion of a question
  const handleToggleExpansion = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand if not expanded
    }
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        FAQ
      </Typography>
      {faqData.map((item, index) => (
        <Box key={index} mb={2}>
          {/* Question */}
          <Typography
            variant="subtitle1"
            component="div"
            onClick={() => handleToggleExpansion(index)}
            sx={{ cursor: 'pointer', fontWeight: 'bold', mb: 1 }}
          >
            {item.question}
          </Typography>
          {/* Answer - render only if this question is expanded */}
          {expandedIndex === index && (
            <Typography variant="body1">{item.answer}</Typography>
          )}
        </Box>
      ))}
    </div>
  );
}

export default FAQ;
