import { NextResponse } from 'next/server';
import projects from '../projects.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  const result = projects.filter(
    (proj) =>
      proj.text.toLowerCase().includes(q.toLowerCase()) ||
      proj.title.toLowerCase().includes(q.toLowerCase())
  );
  return NextResponse.json(result);
}
