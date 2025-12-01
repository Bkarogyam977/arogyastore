'use client'
import { Layout, Card, Progress, Tag, Collapse, Modal, Badge, Image, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {
  PlayCircleOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  BookOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiVideo, FiBookOpen, FiArrowRight } from 'react-icons/fi';
const { useToken } = theme;

function CourseQuizzes() {
  const { token } = useToken();
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://main.bkarogyam.com/arogyamadvisorapicourses/');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const startQuiz = (course, chapter) => {
    // Validate chapter has questions before starting quiz
    if (!chapter?.questions || chapter.questions.length === 0) {
      console.error('No questions found in this chapter');
      return;
    }
    
    setSelectedCourse(course);
    setSelectedChapter(chapter);
    setShowQuizModal(true);
  };

  const beginQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setShowQuizModal(false);
    setUserAnswers([]);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null || !selectedChapter) return;

    const currentQuestion = selectedChapter.questions[currentQuestionIndex];
    
    // Validate question data exists
    if (!currentQuestion || !currentQuestion.options || !currentQuestion.correctAnswer) {
      console.error('Invalid question data');
      return;
    }

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Save user's answer with validation
    setUserAnswers([...userAnswers, {
      question: currentQuestion.question_text || 'Question text not available',
      userAnswer: currentQuestion.options[selectedAnswer]?.option_text || 'Your answer',
      correctAnswer: currentQuestion.options[currentQuestion.correctAnswer]?.option_text || 'Correct answer',
      isCorrect: correct
    }]);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestionIndex < selectedChapter.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setSelectedCourse(null);
    setSelectedChapter(null);
    setQuizStarted(false);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  if (loading) {
    return (
      <Layout className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 rounded-full border-4 border-green-500 border-t-transparent"></div>
        </motion.div>
      </Layout>
    );
  }

  if (quizStarted && selectedChapter) {
    const currentQuestion = selectedChapter.questions[currentQuestionIndex];
    if (!currentQuestion) {
      return (
        <Layout className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Invalid Question Data</h2>
            <Button onClick={resetQuiz} className="bg-green-600 text-white">
              Back to Courses
            </Button>
          </div>
        </Layout>
      );
    }

    const progress = ((currentQuestionIndex + 1) / selectedChapter.questions.length) * 100;

    return (
      <Layout className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="w-full max-w-4xl px-4 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mx-auto"
          >
            {/* Header with progress */}
            <div className="p-6 pb-0">
              <div className="flex justify-between items-center mb-6">
                <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={resetQuiz}
                    size="sm"
                    variant="light"
                    className="flex items-center gap-1 text-green-600 hover:text-green-700"
                  >
                    ← Back to Course
                  </Button>
                </motion.div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100 shadow-sm">
                    <ClockCircleOutlined className="text-green-600" />
                    <span className="font-medium text-green-800">
                      {currentQuestionIndex + 1}/{selectedChapter.questions.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100 shadow-sm">
                    <TrophyOutlined className="text-yellow-600" />
                    <span className="font-medium text-yellow-800">{score}</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8 }}
                className="h-2 bg-green-100 rounded-full mb-6"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600"
                  style={{ width: `${progress}%` }}
                />
              </motion.div>
            </div>

            <div className="p-6 pt-0">
              <AnimatePresence mode="wait">
                {showFeedback && (
                  <motion.div
                    key={`feedback-${currentQuestionIndex}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mb-6 p-4 rounded-lg border shadow-sm ${isCorrect
                      ? 'bg-green-50 text-green-800 border-green-200'
                      : 'bg-red-50 text-red-800 border-red-200'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {isCorrect ? (
                        <>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.6 }}
                          >
                            <span className="text-2xl">🎉</span>
                          </motion.div>
                          <div>
                            <h4 className="font-bold">Great job!</h4>
                            <p className="text-sm">You got it right!</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="text-2xl">💡</span>
                          <div>
                            <h4 className="font-bold">Correct answer:</h4>
                            <p className="text-sm">
                              {currentQuestion.options[currentQuestion.correctAnswer]?.option_text || 'Correct answer not available'}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                key={`question-${currentQuestionIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 leading-relaxed">
                    {currentQuestion.question_text}
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                    {currentQuestion.options?.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isActuallyCorrect = index === currentQuestion.correctAnswer;
                      const showCorrect = showFeedback && isActuallyCorrect;
                      const showIncorrect = showFeedback && isSelected && !isActuallyCorrect;

                      return (
                        <motion.div
                          key={index}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswerSelect(index)}
                          className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${showCorrect
                            ? 'border-green-500 bg-green-50 shadow-green-100 shadow-sm'
                            : showIncorrect
                              ? 'border-red-500 bg-red-50 shadow-red-100 shadow-sm'
                              : isSelected
                                ? 'border-green-500 bg-green-50 shadow-sm'
                                : 'border-gray-200 hover:bg-gray-50 hover:shadow-sm'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <motion.div
                              animate={{
                                scale: showCorrect ? [1, 1.1, 1] : 1,
                                backgroundColor: showCorrect
                                  ? '#10B981'
                                  : showIncorrect
                                    ? '#EF4444'
                                    : isSelected
                                      ? '#10B981'
                                      : '#E5E7EB'
                              }}
                              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white`}
                            >
                              {String.fromCharCode(65 + index)}
                            </motion.div>
                            <span className={`${(showCorrect || showIncorrect) ? 'font-medium' : ''}`}>
                              {option?.option_text || `Option ${index + 1}`}
                            </span>
                            {showCorrect && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="ml-auto text-green-500"
                              >
                                <CheckCircleOutlined />
                              </motion.span>
                            )}
                            {showIncorrect && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="ml-auto text-red-500"
                              >
                                <CloseCircleOutlined />
                              </motion.span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              <div className="mt-8 flex justify-end">
                <motion.div
                  whileHover={{ scale: selectedAnswer ? 1.03 : 1 }}
                  whileTap={{ scale: selectedAnswer ? 0.97 : 1 }}
                >
                  <Button
                    onClick={handleNextQuestion}
                    isDisabled={selectedAnswer === null || showFeedback}
                    className={`min-w-[180px] h-12 text-lg font-medium ${showFeedback
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                      } text-white shadow-md`}
                    size="lg"
                    endContent={
                      <motion.div
                        animate={{
                          x: selectedAnswer ? [0, 4, 0] : 0
                        }}
                        transition={{
                          repeat: selectedAnswer ? Infinity : 0,
                          duration: 1.5
                        }}
                      >
                        <FiArrowRight />
                      </motion.div>
                    }
                  >
                    {currentQuestionIndex < selectedChapter.questions.length - 1 ? (
                      <span>Next Question</span>
                    ) : (
                      <span>Submit Quiz</span>
                    )}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  if (quizCompleted && selectedChapter) {
    const percentage = Math.round((score / selectedChapter.questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <Layout className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotateY: 360 }}
              transition={{ duration: 1.5 }}
            >
              {passed ? (
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-green-200">
                  <CheckCircleOutlined className="text-5xl text-green-500" />
                </div>
              ) : (
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-200">
                  <BookOutlined className="text-5xl text-blue-500" />
                </div>
              )}
            </motion.div>

            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {passed ? 'Congratulations!' : 'Quiz Completed!'}
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              You scored {score} out of {selectedChapter.questions.length}
            </p>

            <Progress
              percent={percentage}
              status={passed ? 'success' : 'normal'}
              strokeColor={passed ? token.colorPrimary : token.colorInfo}
              trailColor="#e5e7eb"
              strokeWidth={10}
              format={() => `${percentage}%`}
              className="mb-6 max-w-md mx-auto"
            />

            {passed ? (
              <Badge.Ribbon text="Passed!" color={token.colorPrimary} className="text-xs">
                <div className="p-4"></div>
              </Badge.Ribbon>
            ) : (
              <div className="bg-red-50 text-red-800 p-3 rounded-lg max-w-md mx-auto mb-6">
                <p className="font-medium">You need 70% to pass. Try again!</p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Your Answers:</h3>
            <div className="space-y-4">
              {userAnswers.map((answer, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${answer.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-gray-800">{answer.question}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${answer.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {answer.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Your answer:</p>
                      <p className={answer.isCorrect ? 'text-green-700' : 'text-red-700'}>{answer.userAnswer}</p>
                    </div>
                    {!answer.isCorrect && (
                      <div>
                        <p className="text-gray-500">Correct answer:</p>
                        <p className="text-green-700">{answer.correctAnswer}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setScore(0);
                  setSelectedAnswer(null);
                  setQuizCompleted(false);
                  setUserAnswers([]);
                }}
                className="bg-green-600 text-white h-12 w-full sm:w-auto"
              >
                Retry Quiz
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={resetQuiz}
                className="bg-white border border-green-600 text-green-600 h-12 w-full sm:w-auto"
              >
                Back to Course
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Layout>
    );
  }

  return (
    <Layout className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="relative h-auto w-full overflow-hidden">
        <Image
          src="/images/Quiz-Coconut-Banner-Logo-UK.png"
          alt="Ayurveda Learning"
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Tag color={token.colorPrimary} className="text-sm font-medium mb-3 py-1 px-3">
            Our Curriculum
          </Tag>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Ayurveda Learning Path
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Structured courses with interactive quizzes to test your knowledge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, courseIndex) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                          {course.course_title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {course.course_sort_description}
                        </p>
                      </div>
                      <Tag color={token.colorPrimary} className="flex-shrink-0 ml-2">
                        {course.chapters.length} {course.chapters.length > 1 ? 'Modules' : 'Module'}
                      </Tag>
                    </div>

                    {/* Updated Collapse component using items prop */}
                    <Collapse
                      accordion
                      bordered={false}
                      className="border-0 bg-transparent flex-1 flex flex-col"
                      expandIconPosition="end"
                      items={course.chapters.slice(0, 3).map((chapter, chapterIndex) => ({
                        key: chapter.id,
                        label: (
                          <div className="flex items-center justify-between pr-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium text-sm">
                                {chapterIndex + 1}
                              </div>
                              <span className="font-medium text-gray-800 text-sm">
                                {chapter.title.length > 30
                                  ? `${chapter.title.substring(0, 30)}...`
                                  : chapter.title}
                              </span>
                            </div>
                            {chapter.questions?.length > 0 && (
                              <Badge
                                count={`${chapter.questions.length}`}
                                color={token.colorPrimary}
                                className="font-medium text-xs"
                              />
                            )}
                          </div>
                        ),
                        children: (
                          <div className="grid grid-cols-1 gap-4 py-3">
                            <div className="space-y-3">
                              {chapter.video_url && (
                                <motion.div
                                  whileHover={{ scale: 1.01 }}
                                  className="flex items-center gap-2 p-2 bg-blue-50 rounded-md border border-blue-100"
                                >
                                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <FiVideo size={16} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <a
                                      href={chapter.video_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:underline text-blue-600 font-medium text-sm truncate block"
                                      title="Watch Video Lesson"
                                    >
                                      Watch Video
                                    </a>
                                  </div>
                                </motion.div>
                              )}
                              {chapter.summary && (
                                <div className="text-gray-700 text-xs line-clamp-3"
                                  dangerouslySetInnerHTML={{ __html: chapter.summary }}
                                />
                              )}
                            </div>

                            {chapter.questions?.length > 0 && (
                              <motion.div
                                whileHover={{ y: -2 }}
                                className="bg-green-50 p-4 rounded-lg border border-green-100"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <FiAward size={16} />
                                  </div>
                                  <h4 className="font-semibold text-gray-800 text-sm">Quiz</h4>
                                </div>
                                <p className="text-gray-600 text-xs mb-3">
                                  {chapter.questions.length} questions
                                </p>
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Button
                                    onClick={() => startQuiz(course, chapter)}
                                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white h-8 text-xs"
                                    endContent={<FiArrowRight size={14} />}
                                  >
                                    Start Quiz
                                  </Button>
                                </motion.div>
                              </motion.div>
                            )}
                          </div>
                        ),
                        className: "mb-2 last:mb-0 bg-gray-50 rounded-lg px-3 border-0"
                      }))}
                    />

                    {course.chapters.length > 3 && (
                      <div className="mt-3 text-center">
                        <span className="text-gray-500 text-xs">
                          +{course.chapters.length - 3} more modules
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        open={showQuizModal}
        onCancel={() => setShowQuizModal(false)}
        footer={null}
        centered
        className="rounded-3xl max-w-md"
        closable={false}
      >
        <div className="p-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <FiAward size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {selectedChapter?.title} Quiz
          </h3>
          <p className="text-gray-600 mb-6">
            This quiz contains {selectedChapter?.questions?.length} questions to test your knowledge
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg text-left">
              <ClockCircleOutlined className="text-blue-500 text-lg" />
              <span>Approx. {Math.ceil(selectedChapter?.questions?.length * 0.5)} minutes</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg text-left">
              <TrophyOutlined className="text-yellow-500 text-lg" />
              <span>Score 70% to pass</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg text-left">
              <BookOutlined className="text-green-500 text-lg" />
              <span>Review chapter first for best results</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button
              onClick={() => setShowQuizModal(false)}
              className="border border-gray-300 h-12 flex-1"
            >
              Not Now
            </Button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Button
                onClick={beginQuiz}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white h-12 w-full"
                endContent={<FiArrowRight />}
              >
                Start Quiz
              </Button>
            </motion.div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}

export default CourseQuizzes;