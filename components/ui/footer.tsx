export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* 版权信息 */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Asta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
