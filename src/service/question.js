const surveyData = {
  title: "자가진단 기반 병원 안내 설문",
  description: "증상 기반 비의료적 참고용 설문입니다.",
  questions: [
    {
      id: 1,
      question: "현재 느끼는 증상 중 가장 가까운 것은 무엇인가요?",
      options: [
        "A. 발열, 기침, 인후통 등 감기와 유사한 증상",
        "B. 복통, 설사, 소화 불량 등 소화기 증상",
        "C. 두통, 어지러움, 피로감 등의 전신 증상",
        "D. 피부 발진, 가려움 등 피부 문제",
        "E. 외상, 골절 의심 등 신체 부위의 급성 통증",
      ],
    },
    {
      id: 2,
      question: "증상이 시작된 시점은 언제인가요?",
      options: [
        "A. 24시간 이내",
        "B. 1~3일 전",
        "C. 3~7일 전",
        "D. 1주일 이상 지속됨",
        "E. 잘 기억나지 않음",
      ],
    },
    {
      id: 3,
      question: "증상의 강도는 어느 정도인가요?",
      options: [
        "A. 거의 느껴지지 않음",
        "B. 가볍게 불편함",
        "C. 일상생활에 약간 지장이 있음",
        "D. 일상에 상당한 지장이 있음",
        "E. 매우 심각하고 즉각적인 도움이 필요함",
      ],
    },
    {
      id: 4,
      question: "아래 중 자신의 상태와 가장 가까운 것을 고르세요.",
      options: [
        "A. 최근 감염 의심 상황이 있었음 (환자 접촉 등)",
        "B. 특정 음식 섭취 후 증상 발생",
        "C. 과로 또는 스트레스 상황 이후 증상 발생",
        "D. 알레르기 병력이 있는 편임",
        "E. 특별한 이유 없이 갑자기 나타남",
      ],
    },
    {
      id: 5,
      question: "지금 가장 필요한 조치는 무엇이라고 느끼나요?",
      options: [
        "A. 가벼운 진료 및 확인",
        "B. 혈액·소변 검사 등 기본 검사가 필요할 듯함",
        "C. 약 처방 정도가 필요할 듯함",
        "D. 피부, 알레르기 등 특정 과 전문의가 필요함",
        "E. 응급 상황일 수 있어 빠른 진료가 필요함",
      ],
    },
  ],
};

function getQuestion(step) {
  const question = surveyData.questions.find((q) => q.id === step);
  if (!question) {
    return { error: "해당 step의 질문이 없습니다." };
  }
  return {
    step: question.id,
    question: question.question,
    options: question.options,
  };
}

const questionService = {
  getQuestion,
};

module.exports = questionService;
