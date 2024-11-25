const tokenStorage = {
  add(token) {
    try {
      localStorage.setItem('mbti-auth', token);
    } catch {
      alert('더 이상 추가할 수 없습니다.');
    }
  },

  update(toUpdate) {
    try {
      localStorage.setItem('mbti-auth', toUpdate);
    } catch {
      alert('수정에 실패했습니다.');
    }
  },

  clear() {
    localStorage.setItem('mbti-auth', '{}');
  },

  getToken() {
    return localStorage.getItem('mbti-auth');
  },
};

export { tokenStorage };
