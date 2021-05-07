/**
 * Bootstrap color mapping based on tiket status
 */
const StatusBadgeBg = {
  open: 'bg-danger',
  pending: 'bg-primary',
  solved: 'bg-success',
};

/**
 * Translate ticket status to Bootstrap color classname
 * @param {string} status 
 * @returns 
 */
const badgeBg = (status) => StatusBadgeBg[status];

export default badgeBg;
