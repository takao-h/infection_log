const NextAndBackButton = () => (
  <div style={{ marginTop: '20px' }}>
    <button
      type="button"
      onClick={() => console.log('Back button clicked')}
      style={{ marginRight: '10px' }}
    >
      もどる
    </button>
    <button type="submit" style={{ marginLeft: '10px' }}>
      すすむ
    </button>
  </div>
);

export default NextAndBackButton;
