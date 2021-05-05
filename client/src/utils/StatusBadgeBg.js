const StatusBadgeBg = {
  open: 'bg-danger',
  pending: 'bg-primary',
  solved: 'bg-success',
};

const badgeBg = (status) => StatusBadgeBg[status];

export default badgeBg;
