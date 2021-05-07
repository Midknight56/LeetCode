class Solution {
    public int[] countPoints(int[][] points, int[][] queries) {
        int[] answers = new int[queries.length];
        for (int i = 0; i < queries.length; ++i) {
            int a = queries[i][0], b = queries[i][1], radius = queries[i][2] * queries[i][2];
            for (int[] point : points) {
                if (pointOnCircle(point[0], point[1], a, b, radius)) {
                    answers[i] += 1;
                }
            }
        }
        return answers;
    }
    
    public boolean pointOnCircle(int x, int y, int a, int b, int radius) {
        return Math.pow(x - a, 2) + Math.pow(y - b, 2) <= radius;
    }
}