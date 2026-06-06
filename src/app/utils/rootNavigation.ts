export function goToRootHash(hash: string) {
  if (typeof window === 'undefined') {
    return;
  }

  const normalizedHash = hash.replace(/^#/, '');
  window.location.href = normalizedHash ? `/#${normalizedHash}` : '/';
}

export function goToHome() {
  goToRootHash('home');
}

export function goToCountries() {
  goToRootHash('countries');
}
